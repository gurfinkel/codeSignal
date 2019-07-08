#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub isArithmeticProgression {
    my ($sequence) = @_;

    my $d = $$sequence[1] - $$sequence[0];

    for (my $i = 2; @$sequence > $i; ++$i) {
        unless ($d == @$sequence[$i] - @$sequence[$i - 1]) {
            return 0;
        }
    }

    return 1;
}
