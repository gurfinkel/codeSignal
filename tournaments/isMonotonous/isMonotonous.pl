#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub isMonotonous {
    my ($sequence) = @_;

    my $n = @$sequence;

    if (1 == $n) {
        return 1;
    }

    my $diff = $$sequence[1] - $$sequence[0];

    for (my $i = 0; $n - 1 > $i; ++$i) {
        if (0 >= $diff * ($$sequence[$i + 1] - $$sequence[$i])) {
            return 0;
        }
    }

    return 1;
}
