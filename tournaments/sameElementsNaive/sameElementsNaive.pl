#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub sameElementsNaive {
    my ($a, $b) = @_;

    my $result = 0;
    my %store = map { $_, 1 } @$a;

    foreach my $item (@$b) {
        if ($store{$item}) {
            ++$result;
        }
    }

    return $result;
}
