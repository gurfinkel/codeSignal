#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub maximalEven {
    use List::Util qw( min max );

    my ($inputArray) = @_;

    my $result = 0;

    foreach my $item (@$inputArray) {
        unless ($item & 1) {
            $result = max($result, $item);
        }
    }

    return $result;
}
